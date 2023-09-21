import ButtonTemplate from "./ButtonTemplate";

export default function MenuButton() {

    const toggleMenu = () => {
        console.log("TOGGLE YOLOOO")
    }

    return(
        <ButtonTemplate onClick={ toggleMenu}>
            Yolo
        </ButtonTemplate>
    )
}