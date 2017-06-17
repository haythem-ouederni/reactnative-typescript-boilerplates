/**
 * Class describing a Todo item structure
 */
export class TodoData {

    // to element key on the database
    private _key : string;

    // the element label
    private _label : string;

    // element state : new, done, ongoing
    private _state : string;

    /********************************************/
    /*********** Constructors *********/
    /********************************************/

    /**
     * Build the object based on the Todo element received from the database / webservice.
     * @param aTodoFromWs : the Todo elements received from the database / webservice
     */
    constructor(aTodoFromWs?: any) {
        if (aTodoFromWs) {
            this.convertTodoFromWs(aTodoFromWs);
        }
    }

    /********************************************/
    /*********** Getters & Setters *********/
    /********************************************/

    get key() : string {return this._key;}

    set key(value : string) {
        if (this._key !== value) {
            this._key = value;
        }
    }

    get label() : string {return this._label;}

    set label(value : string) {
        if (this._label !== value) {
            this._label = value;
        }
    }

    get state() : string {return this._state;}

    set state(value : string) {
        if (this._state !== value) {
            this._state = value;
        }
    }

    /********************************************/
    /*********** Data converters *********/
    /********************************************/

    /**
     * This method converts a Todo element received from the database / webservice to an object to be used by the app.
     * @param aTodoFromWs : the Todo elements received from the database / webservice
     */
    public convertTodoFromWs(aTodoFromWs : any) {
        if (aTodoFromWs) {
            this.key = aTodoFromWs.key;
            this.label = aTodoFromWs
                .val()
                .label;

            this.state = aTodoFromWs
                .val()
                .state;
        }

    }
}