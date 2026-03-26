import "./Folder.css";

export default function Folder(props) {
    if (!props.folder) return null;

    const {title, color} = props.folder;

    return (
        <span 
            className="folder-tag" 
            style={{ backgroundColor: color }}
        >
            {title}
        </span>
    );
}