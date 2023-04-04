import React from "react"

interface ButtonProps {
  variant?: "primary" | "secondary" | "default"
  className?: string
  type?: "button" | "reset" | "submit" | undefined
  children?: any
  text?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className: _className,
  type = "button",
  children,
  text,
  disabled,
  onClick,
}) => {
  const [classNames, setClassNames] = React.useState("")

  React.useEffect(() => {
    const selectors = {
      primary:
        "inline-block font-semibold text-xl float-right text-blue-600 rounded-xl py-3 m-2",
      secondary:
        "inline-block float-right bg-white font-semibold text-xl border-2 border-blue-600 text-blue-600 rounded-xl py-3 px-9 m-2",
      default:
        "inline-block bg-blue-600 float-right text-white font-semibold text-xl border-2 rounded-xl py-3 px-9 m-2",
    }

    const standardSelectors: string =
      selectors[variant as keyof typeof selectors]
    if (_className) {
      const all = standardSelectors + " " + _className
      setClassNames(all)
    } else setClassNames(standardSelectors)
  }, [_className, variant])

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text ?? children}
    </button>
  )
}
