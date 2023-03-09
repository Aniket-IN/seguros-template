import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";
import InputGroup from "../utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { contextType } from "google-map-react";

const CommentsModalBtn = ({
  alert,
  as = "button",
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState("before");
  const token = useSelector((state) => state.user.token);


  const sample = {
   
    id: 2,
    userprofile: {
        user: {
            id: 2,
            first_name: "Noman",
            last_name: "Test",
            username :"abc@gmail.com",
            email: "abc@gmail.com"
        },
        firebase_uid: null,
        phone: "+593112233445",
        full_name: "Noman Test",
        identification_card: "12345-12345-1224",
        birth_date: "2023-01-09T00:00:00",
        role: "User",
        lat: null,
        long: null,
        verification_code: 8375,
        email_verified: true,
        enable_location: false,
        user_type: "Individual",
        suspend: false,
        created_at: "2023-02-28T17:20:24.017556Z",
        updated_at: "2023-02-28T17:21:48.835311Z",
        image_url: null
    },
    comment: "this is a random comment on alert 83",
    created_at: "2023-03-07T19:52:04.973125Z",
    updated_at: "2023-03-07T20:07:55.428833Z",
    alert: 83
}

  const [CommentContent, setCommentContent] = useState({
    type:alert.type,
    id:alert.id,
    comment:""

});
  const [Comments, setComments] = useState([sample]);
  
    
  
  

  const getAllComments = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token ? `token ${token}` : null,
    };
    try {
      setloading("during");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/alert/getcommentalertsos?id=${alert.id}&type=${alert.type}`,
        { headers: headers }
      );
      console.log("comment response",alert.id ," and", response.data.data);
      setComments(response.data.data);
      setloading("after");
      
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token ? `token ${token}` : null,
    };
    try {
   
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/alert/postcommentalertsos/`,CommentContent ,{ headers: headers});
      console.log("comment post response",alert.id ," and", response.data.data);
      getAllComments();
      const comment = {...CommentContent, comment: ""};
      setCommentContent(comment);
      
      
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAllComments(); 
  },[open]);


  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-4xl overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Comentarios</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2">
            <ul className="overflow-auto bg-accent p-2.5 text-sm lg:h-96">
            {
              loading==="after" && console.log("just beofore entering comment",alert.id , "and" , Comments)
            }
            {loading==="after" && Comments.length!=0 ? Comments.map((record) => {
           return  <CommentsList comment={record} key={record.id} />;
              
                  }).reverse():
                  <p className=" text-secondary">aún no se han hecho comentarios!</p>}
            </ul>
            <div className="text-sm">
              {/* <InputGroup>
                <InputGroup.Textarea
                  className="h-60"
                  placeholder="Escribir..."
               
                />
              </InputGroup> */}
              <textarea
                onChange={(event) => {
                  const comment = {...CommentContent, comment: event.target.value};
                  setCommentContent(comment);
                }}
                placeholder="Escribir..."
                className=" w-full  border border-[#e2e8f0] px-4 py-2 focus:border-none focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                name=""
                id=""
                cols="30"
                rows="10"
                value={CommentContent.comment}
              ></textarea>
              <div className="mt-3 text-right">
                <button
                  className="rounded bg-black px-4 py-1.5 text-white"
                   onClick={postComment}
                >
                  Crear comentario
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Cerrar
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

export default CommentsModalBtn;






const CommentsList = ({ comment }) => {


  console.log("comment single", comment);
  
  return (
    <li className="bg-white px-2.5 py-3 mt-2">
      <p className=" text-secondary">
        {comment?.comment}
      </p>
      <div className="mt-3 flex justify-between gap-4 text-secondary">
        <span>{comment?.userprofile.full_name}</span>
        <div>
        <span className="mr-2">{comment?.created_at.slice(0,10).replace(/-/g,"/")}</span>
        <span>{comment?.created_at.slice(12,19)} Hrs</span>
        </div>
      </div>
    </li>
   
  );
};
