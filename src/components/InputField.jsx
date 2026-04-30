export default function InputField({ title, id, onChange, ...props }) {
    console.log()
    return (
        <label>
            {title}
            <input
                id={id}
                onChange={onChange}
                type="number"
            />
        </label>
    )
}