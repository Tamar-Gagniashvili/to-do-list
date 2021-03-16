import classes from './Main.module.css'

function Main() {
    return (
        <div className={classes.main}>
            <div className={classes.contentWrapper}>
                <div className={classes.headingWrapper}>
                    <h1>ის რაც უნდა შეასრულო!</h1>
                </div>
                <div className={classes.listWrapper}>
                    <div className={classes.addWrapper}>
                        <input type="text" placeholder="დაამატე..." />
                        <button className={classes.button}>დამატება</button>
                    </div>

                    <div className={classes.list}>
                        <p>ისწავლე რეაქტი</p>
                        <button className={classes.listButton}>შესრულებულია</button>
                        <button className={classes.deleteButton}>წაშლა</button>
                    </div>
                    <div className={classes.list}>
                        <p>ისწავლე რეაქტი</p>
                        <button className={classes.listButton}>შესრულებულია</button>
                        <button className={classes.deleteButton}>წაშლა</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;