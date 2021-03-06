import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import "../style.css"
import {TooltipButton} from "./TooltipUI"
import {decmsg} from "./runpy"

export function DropImage(){
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      {TooltipButton(file.preview,decmsg(file.preview))}
    </div>
    /*<div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>*/
  ))


    return (
      <div className="Board">
        <div {...getRootProps()}>
          <input {
            ...getInputProps()
          } />
          <p>Drop files here</p>
          <p>Drop files here</p>
          <p>Drop files here</p>
          <p>Drop files here</p>
          <p>Drop files here</p>
          <p>Drop files here</p>
          <p>Drop files here</p>
        {images}
        
        </div>
      </div>
    )
  }

