import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState, useRef, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import {GoogleMapReact} from "google-map-react";
import { useMemo } from "react";

import { compose, withProps } from "recompose";
import axios from "axios";


const EvidenceModalBtn = ({
  as = "button",
  alert = {},
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);
const [blobUrl, setBlobUrl] = useState("");
  const location = { lat: alert.lat, lng: alert.long };
  const close = () => {
    setOpen(false);
  };
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
  

    function handleDownloadClick() {
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = alert.evidence_number;
      document.body.appendChild(link);
      link.click();
    }






    useEffect(() => {

      //download video
        const url = alert.evidence_url;
        console.log("evidence url: " + url);
        axios
        .get(url, {
          responseType: 'blob',
        })
        .then((response) => {
          setBlobUrl(URL.createObjectURL(response.data));
        }
        )



// loction coordinates
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }, []);

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">{alert.evidence_number}</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="flex gap-5">
              {/* <img
                src={alert.evidence_url}
                className="block aspect-[9/16] w-1/3 object-cover"
                alt="evidence-1"
              /> */}
              <VideoPlayer src={alert.evidence_url} />
              <div className="flex-grow space-y-5 text-sm">
                <div className=" w-full bg-neutral">
                  {/* <Map isMarkerShown={true} /> */}

                  {/* <div style={{ width: "100%", height: "100%" }}>
                    <MapWrapped
                      googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAvWjgFutpCvylALfQ3iUUlBrRVF6CZChM'
                      // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` , width:"100%" }} />}
                      containerElement={<div style={{ height: `100%` , width:"100%" }} />}
                      mapElement={<div style={{ height: `100%` , width:"100%" }} />}
                    />
               
                  </div> */}

                  <GMap alert={alert} longitude={parseFloat(longitude)} latitude={parseFloat(latitude)} />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <dd
                      className={
                        alert.type==="Alert"
                          ? "font-semibold"
                          : "font-semibold text-danger"
                      }
                    >
                      {alert.type ==="Alert" ? "Alert" : "SOS"}
                    </dd>
                    <dd>{alert.type === "Alert" ?  `Alert#${alert.id}` : `SOS#${alert.id}`}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Ubicación</dd>
                    <dd>
                    <a className="hover:text-blue-600" href={`http://maps.google.com/maps?saddr=${latitude},${longitude}&daddr=${alert?.lat},${alert?.long}`} target="_blank" rel="noopener noreferrer"  >
                      {alert.lat.slice(0.12) ?? "lat missing"},{" "}
                      {alert.long.slice(0.12) ?? "long missing"}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Usuario</dd>
                    <dd>
                      {alert.userprofile?.full_name ?? "user name missing"}
                    </dd>
                    <dd>ID. {alert.userprofile.ui_id ?? "id missing"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Teléfono</dd>
                    <dd>{alert.userprofile?.phone ?? "telephone missing"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Fecha</dd>
                    <dd>{alert.alert_date.slice(0, 10) ?? "23/09/2022"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Hora</dd>
                    <dd>{alert.alert_time ?? "10:30"} Hrs</dd>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn className="bg-black text-white">

               <span onClick={handleDownloadClick} >Descargar Evidencia</span>  
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: classNames(className, "font-semibold hover:underline"),
        ...props,
      })}
    </>
  );
};

export default EvidenceModalBtn;

function VideoPlayer(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="w-[40%]">
      <video ref={videoRef} controls>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}

// const GMaps = () =>{
//     return (
//       <div>
//         <GoogleMapReact
//           style={{width: "100%", height: "500"}}
//           defaultCenter={{lat: 59.95, lng: 30.33}}
//           defaultZoom={11}
//           />
//       </div>
//     )

// }

const GMap = GoogleApiWrapper({
  apiKey: "AIzaSyAvWjgFutpCvylALfQ3iUUlBrRVF6CZChM",
})((props) => {
  const style = {
    width: "370px",
    height: "170px",
    position: 'relative',  
  };
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%',
 
  }
  return (
   
    <Map

    initialCenter={{
      lat: props.alert?.lat,
      lng: props.alert?.long
    }}
      style={style}
      containerStyle={containerStyle}
      google={props?.google}
      zoom={16}
      className="h-full w-full"
    >
      <Marker style={style} name={"Current Location"} position={{lat: props.alert?.lat, lng: props.alert?.long}} ></Marker>
    {/* <StyledMark/> */}
    </Map>
  
  );
});


const StyledMark = (props) => {

  return (
    <div className="marker"
      style={{ backgroundColor: "red", cursor: 'pointer'}}
      title="marker"
    >
      sdffg
    </div>
  );
};