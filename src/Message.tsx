// rfc or rfce: shortcut to create functional component

function Message() {

    const name = 'Leah'

    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>

}

export default Message