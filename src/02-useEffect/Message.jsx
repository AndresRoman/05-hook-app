import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        console.log('mesagge mounted')

        return () => {
            console.log('mesagge unmounted')

        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
