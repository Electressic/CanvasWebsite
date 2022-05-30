function Modulplan({modulplan,setModulplan}) {
    return (
        <div className="container">
            <input
                type="text"
                id="1"
                value={modulplan}
                placeholder="Bildlink hier einfügen"
                onChange={(e) => setModulplan(e.target.value)}
            />
            <button className="idk" onClick={(e) => setModulplan(e.target.valueOf(modulplan))}>
                Submit
            </button>
        </div>
    );
}
export default Modulplan;