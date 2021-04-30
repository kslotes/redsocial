import {Icon} from "../BasicComponents/Icon";
const Icons = () => {
    return (
        <div className="d-flex flex-row">
            <Icon href="https://www.facebook.com" target="_blank" facebook className="bi bi-facebook mr-2"></Icon>
            <Icon href="https://www.twitter.com" target="_blank" twitter className="bi bi-twitter mr-2"></Icon>
            <Icon href="https://www.instagram.com" target="_blank" instagram className="bi bi-instagram"></Icon>
        </div>
    );
};

export default Icons;
