export default function InputField({ title, id, value, onChange, ...props }) {
    return (
        <label>
            {title}
            <input
                id={id}
                value={value}
                onChange={onChange}
                type="number"
                required
            />
        </label>
    )
}