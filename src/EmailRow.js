import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./EmailRow.css"
import { selectMail } from "./features/mailSlice";


function EmailRow({ id, title, subject, description,
time }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
      dispatch(
        selectMail({
        id, 
        title, 
        subject, 
        description,
        time,
      })
     )
     history.push("/mail")
    }
    return (
      <a href="/mail">
        <div onClick={openMail} className="emailRow">

          <div className="emailRow__options">
              <Checkbox/>
              <IconButton>
                <StarBorderOutlinedIcon />
              </IconButton>
              <IconButton>
                <LabelImportantOutlinedIcon/>
              </IconButton>
          </div>

          <h3 className="emailRow__title">
                {title}
          </h3>

          <div className="emailRow__message">
                <h4>{subject}{" "} 
                <span className="emailRow__description">-
                 {description}
                </span>
                
                </h4>
          </div>

          <p className="emailRow__time">
               {time}
          </p>

        </div>
      </a>
    )
}

export default EmailRow