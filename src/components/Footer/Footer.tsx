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
                                <Svg className="footer__socials-icon" width={19} height={11} iconId="icon-vk" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link">
                                <Svg className="footer__socials-icon" width={16} height={12} iconId="icon-utube" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link">
                                <Svg className="footer__socials-icon" width={11} height={18} iconId="icon-ok" />
                            </a>
                        </li>
                        <li className="footer__socials-item">
                            <a href="#" className="footer__socials-link">
                                <Svg className="footer__socials-icon" width={17} height={14} iconId="icon-tg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}