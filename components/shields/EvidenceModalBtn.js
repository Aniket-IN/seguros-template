import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState, useRef, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import {GoogleMapReact} from "google-map-react";
import { useMemo } from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
import { compose, withProps } from "recompose";

// function Map() {
//   console.log("entered map");
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}

//     />
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// function gmNoop() { console.log('GMap Callback') }

const EvidenceModalBtn = ({
  as = "button",
  alert = {},
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const location = { lat: alert.lat, lng: alert.long };
  const close = () => {
    setOpen(false);
  };

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: ""
  // });

  // const alert = {
  //   evidence_number: "1231231",
  //   ...alertData,
  //   evidence: alertData.evidence ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${alertData.evidence}` : `/assets/img/sample/evidence-1.png`,
  // }

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

                  <GMap alert={alert} />
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
                      {alert.lat.slice(0.12) ?? "lat missing"},{" "}
                      {alert.long.slice(0.12) ?? "long missing"}
                    </dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Usuario</dd>
                    <dd>
                      {alert.userprofile?.full_name ?? "user name missing"}
                    </dd>
                    <dd>ID. {alert.userprofile.user?.id ?? "id missing"}</dd>
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
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Descargar Evidencia
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