import { ComponentProps, ElementType } from "react";


type polymorphicProps<c extends ElementType> = { variant?: c } & Omit<ComponentProps<c>, "variant">


const ButtonComponent = <c extends ElementType>({ variant, className, ...rest }: polymorphicProps<c>) => {

    const Component = variant || 'button'

    return <Component {...rest} className={`border border-red-500${className}`} />
};

export default ButtonComponent







// const ButtonComponent = <c extends ElementType>({ variant, className, ...rest }: { variant?: c } & Omit<ComponentProps<c>, "variant">) => {

//     const Component = variant || 'button'

//     return <Component {...rest} className={`border border-red-500${className}`} />
// };

// export default ButtonComponent