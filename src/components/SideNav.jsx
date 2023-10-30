import '../styles/sideNav.css'

export default function SideNav ({side, setNextPage, current}) {
    const name = 'side-nav-container ' + side
    const next = side ==='top'? 'landing-main' : side === 'right' ? 'testDiv' : side === 'bottom' ? 'testDiv2' : 'testDiv1' 

    
    
    const click = () => {
        const currentPage = document.getElementsByClassName(current)
        const nextPage = document.getElementsByClassName(next)
        nextPage[0].className = next + ' move-in-' + side

        currentPage[0].className = current + ' move-out-' + side

        setNextPage(next)
    }

    return (
        <div className={name}>
            <button 
                className='btn-side '
                onClick={e=>{
                    click()
                }}
                >I
            </button>
        </div>
    )
}

