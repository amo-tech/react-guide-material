import "./Expression.css";

export const Expression = () => {
    const title = "Expression";
    const arry = [ "item1", "item2", "item3"];
    const Hello = (arg) => `${arg} Function`
    const jsx = <h3>PPP</h3>;
    console.log(jsx)
    return (
        <div className={title.toLocaleLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{arry}</h3>
            <h3>{Hello("World")}</h3>
            {<h3>AAA</h3>}
            {jsx}
        </div>
    );
};