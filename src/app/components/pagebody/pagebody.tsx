import styles from './pagebody.module.css'

export default function PageBody({children, title} : {children: React.ReactNode, title: string}) {
    return (
        <div className={styles.page}>
            <h1 className='text-5xl'>{title}</h1>
            {children}
        </div>
    )
}