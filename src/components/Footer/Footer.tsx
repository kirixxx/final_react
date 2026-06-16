import type { FC } from "react";
import { Svg } from "../Svg/Svg";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="footer__socials-list">
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link">
                                <Svg className="footer__socials-icon footer__socials-icon--vk" width={19} height={11} iconId="icon-vk" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link">
                                <Svg className="footer__socials-icon footer__socials-icon--ut" width={16} height={12} iconId="icon-utube" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link ">
                                <Svg className="footer__socials-icon footer__socials-icon--ok" width={11} height={18} iconId="icon-ok" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link ">
                                <Svg className="footer__socials-icon footer__socials-icon--tg" width={17} height={14} iconId="icon-tg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}