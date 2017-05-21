export class Movie {
    private _title : string;
    private _imageUri : string;

    get title() : string {return this._title;}

    set title(value : string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    get imageUri() : string {return this._imageUri;}

    set imageUri(value : string) {
        if (this._imageUri !== value) {
            this._imageUri = value;
        }
    }

}