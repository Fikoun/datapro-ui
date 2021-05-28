export default function State (props) {
    let color = props.color;
    if (props.state) {
        switch (props.state) {
            case 'online': color = 'green'; break;
            case 'error': color = 'red'; break;
            case 'offline': color = 'red'; break;
            case 'loading': color = 'blue'; break;
        }
    }
    return <span
        className={`transform translate-y-1 rounded-full h-4 w-4 inline-block bg-${color}-500 mx-1 ${props.className}`}>
    </span>
}