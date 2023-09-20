import MainScene from './scenes/MainScene'
/* import Controls from './Controls' */

export default function GameCanvas() {
    return (
        <div className="fixed h-screen w-screen left-0 top-0 z-0">
            <MainScene />
        </div>
    )
}
