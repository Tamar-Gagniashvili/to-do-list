import classes from './Main.css'

function Main() {
    return (
        <div className={classes.main}>
            <div className={classes.contentWrapper}>
                <div className={classes.headingWrapper}>
                    <h1>ის რაც უნდა შეასრულო!</h1>
                </div>
                <div className={classes.listWrapper}>
                    <input type="text" placeholder="დაამატე..."><button>დამატება</button></input>
                    <div className={classes.list}>
                        <p>ისწავლე რეაქტი</p>
                        <button>შესრულებულია</button>
                        <button>წაშლა</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;