


export default function Button({
    children,
    // @typescript-eslint/no-explicit-any
}:{ children: any }) {
    return (
        <button className="inline-block w-auto px-12 py-4 bg-accent text-white rounded-[50px]  font-medium hover:bg-accentDark">
            {children}
        </button>
    )
}