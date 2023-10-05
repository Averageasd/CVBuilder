import deleteSymbol from '../assets/delete.svg'

export function DeleteButton({clickHandler}) {
    return (
        <button type="button"
                onClick={clickHandler}
                style={{
                    border: 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    width: '20px',
                    height: '20px',
                    backgroundImage: `url(${deleteSymbol})`
                }}>

        </button>
    )
}