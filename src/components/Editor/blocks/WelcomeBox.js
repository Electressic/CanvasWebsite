function WelcomeBox ({welcomeText, setWelcomeText, kursName, setKursName}) {

    const onSubmit = (e) => {
        e.preventDefault()

        setWelcomeText('')
        setKursName('')
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label>Headline:</label>
                    <input
                        type="text"
                        id="1"
                        value={welcomeText}
                        placeholder="Willkommen"
                        onChange={(e) => setWelcomeText(e.target.value)}
                    />
                    <label>Kursname:</label>
                    <input
                        type="text"
                        id="2"
                        value={kursName}
                        placeholder="Kursname"
                        onChange={(e) => setKursName(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;
