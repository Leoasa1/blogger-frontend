import Link from 'next/link'
import Style from './style.module.css'

export default function footer() {
    return (
        <footer className={Style.footer}>
            <div className="container">
                <div className="row">
                    <div className={`col ${Style.segment} `}>
                        <h1>Blogger</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem?</p>
                        <a href="#" className="mr-2">
                            <ion-icon 
                                name="logo-instagram" 
                                style={{zoom:"2"}}>
                            </ion-icon>
                        </a>
                        <a href="#" className="mr-2">
                            <ion-icon 
                                name="logo-facebook"
                                style={{zoom:"2"}}>
                            </ion-icon>
                        </a>
                        <a href="#" className="mr-2">
                            <ion-icon 
                                name="logo-linkedin"
                                style={{zoom:"2"}}>
                            </ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon 
                                name="logo-github"
                                style={{zoom:"2"}}>
                            </ion-icon>
                        </a>
                    </div>
                </div>
                <div className="col text-center">
                    <p>Copyright © 2020, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
