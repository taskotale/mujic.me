import '../styles/sideNav.css'

export default function SideNav ({side}) {
    const name = 'side-nav-container ' + side
    return (
        <div className={name}>
            <button 
                className='btn-side '
                >I
            </button>

        </div>
    )
}

