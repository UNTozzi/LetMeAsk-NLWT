import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import appleImg from '../assets/images/apple-logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home () {
    const history = useHistory();

    function goToNewRoom () {
        history.push("/rooms/new")
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration describing a virtual question or doubt"/>
                <strong>Make your own Q&amp;A live room</strong>
                <p>Answer questions from your live audience</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk's logo"/>
                    <p className="separator">Create my own room with</p>
                    <button
                        onClick={goToNewRoom}
                        className="create-room-google"
                    >
                        <img src={googleImg} alt="Google's logo"/>
                        Google
                    </button>
                    <button
                        onClick={goToNewRoom}
                        className="create-room-apple"
                    >
                        <img src={appleImg} alt="Apple's logo"/>
                        Apple
                    </button>
                    <div className="separator">or join an existent room</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Type room's code"
                        />
                        <Button type="submit">
                            Join room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}