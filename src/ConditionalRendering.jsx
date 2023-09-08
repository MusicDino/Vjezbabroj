const ConditionalRendering = (props) => {
        const veciBroj = <p>Uhhhh veliki broj</p>
        const manjiBroj = <p>Ma premali broj</p>

        const provjera = props.number > 5 ? veciBroj : manjiBroj
    return (
        <>
            <h1>
                Conditional Rendering {props.number} {50}
            </h1>

            {provjera}
        </>          
    )
}

export default ConditionalRendering