import React, { useEffect } from "react";
////////appActions
import { getCurrentUserByToken } from "../../../API/AXIOS/appActions";
////////Context
import { useAuth } from "../../../AppContext/AuthContext";
import { useAlert } from "../../../AppContext/AlertContext";
////////Styles
import "./styles.scss";

export const Profile = () => {
  ///  вытянул userData как state
  const { getUserData, userData } = useAuth();
  const { show } = useAlert();

  ///Обеспечивает отправку запроса ЕСЛИ он нужен , юзеффект не впадает в бесконечный цыкл
  useEffect(() => {
    !userData._id && getCurrentUserByToken({ getUserData, show });
  }, [userData, getUserData, show]);

  return (
    <div className="profile">
      <div className="profile__user">
        <div className="user">
          <div className="user__avatar">avatar</div>
          <div className="user__name">USER:{userData.name}</div>
          <div className="user__name">
            WAS REGISTERED: {userData.dateCreated}
          </div>
        </div>
      </div>
    </div>
  );
};
