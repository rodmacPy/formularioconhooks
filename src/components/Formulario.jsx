export const Formulario = (props) => {
    const { entrada, setEntrada } = props;

    const cambiar = (e) => {
        setEntrada(
            {
                ...entrada,
                [e.target.name]: e.target.value
            }
        )
    }
    return (
        <>
            <h1>Complete the Form</h1>
            <form>
                <div>
                    <label htmlFor="FirstName">First Name</label>
                    <input onChange={cambiar} type="text" name="FirstName" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={cambiar} type="text" name="lastName" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={cambiar} type="text" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={cambiar} type="password" name="password" />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={cambiar} type="password" name="confirmPassword" />
                </div>
            </form>
        </>
    )
}
