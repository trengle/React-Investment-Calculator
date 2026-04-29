export default function InputField({ title, id, onChange, val, ...props }) {
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