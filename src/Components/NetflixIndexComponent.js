import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';
import NetflixRegisterComponent from './NetflixRegisterComponent';
import NetflixFooterComponent from './NetflixFooterComponent';

export default function NetflixIndexComponent(){
    return (
        <div className="container-fluid">
            <div className='box'>
                <header>
                    <NetflixHeaderComponent />
                </header>
                <section className='d-flex justify-content-center align-items-center'>
                    <main>
                        <NetflixMainComponent />
                        <NetflixRegisterComponent />
                    </main>
                </section>
                <footer className='m-2 p-2'>
                        <NetflixFooterComponent />
                </footer>
            </div>
        </div>
    )
}