import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";
import InputGroup from "../utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";

const CommentsModalBtn = ({
  alert,
  as = "button",
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const [CommentContent, setCommentContent] = useState("");

  const { axios } = useAxios();
  const fetchData = () => {
    const data = axios.get(
      `/api/alert/getcommentalertsos?id=${alert.id}&type=${alert.type}`
    );
    return data;
  };

  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: responseData,
    error,
  } = useQuery([], fetchData, {
    refetchOnWindowFocus: true,
    cacheTime: 0,
    enabled: true,
  });
  console.log("as comments", responseData?.data);

  const comments =  responseData?.data.data;

  const postComment = () => {
    const data = {

    }
  };

  useEffect(() => {
    // refetch();
  }, [open]);

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

          { !isLoading && comments?.map((item, index)=>{return <CommentsList key={index} comment={item} />})} 
            </ul>
            <div className="text-sm">
              {/* <InputGroup>
                <InputGroup.Textarea
                  className="h-60"
                  placeholder="Escribir..."
               
                />
              </InputGroup> */}
              <textarea
              onChange={(e)=>{setCommentContent(e.target.value); console.log(CommentContent) }}
                placeholder="Escribir..."
                className=" focus:border-none  w-full border border-[#e2e8f0] px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                name=""
                id=""
                cols="30"
                rows="10"
                value={CommentContent}
              ></textarea>
              <div className="mt-3 text-right">
                <button
                  className="rounded bg-black px-4 py-1.5 text-white"
                  // onClick={postComment}
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


const CommentsList =({comment})=>{
  console.log("comment", comment);
  return (
    <li className="bg-white px-2.5 py-3">
    <p className=" text-secondary">
      asd
      {comment.comment}
    </p>
    <div className="mt-3 flex justify-between gap-4 text-secondary">
      <span>{comment.userprofile.full_name}</span>
      <span>{comment.created_at}</span>
    </div>
  </li>
  )
}