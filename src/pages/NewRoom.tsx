import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button'

export function NewRoom () {
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
                    <h2>Create a new room</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Room name"
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                        <p>
                            Do you wanna join an existent room?
                            <Link to="/">Click Here</Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}