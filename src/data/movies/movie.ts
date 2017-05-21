export class MovieData {
    private _id : number;
    private _title : string;
    private _imageUri : string;
    private _overview : string;

    get id() : number {return this._id;}

    set id(value : number) {
        if (this._id !== value) {
            this._id = value;
        }
    }

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

    get overview() : string {return this._overview;}

    set overview(value : string) {
        if (this._overview !== value) {
            this._overview = value;
        }
    }

    /**
     * This method converts the movie sent by the TMDB api to project's movie
     * @param aMovieFromApi the movie sent by the TMDB api to be converted
     */
    public convertMovieFromApi(aMovieFromApi : any) {
        if (aMovieFromApi) {
            this.id = aMovieFromApi.id;
            this.title = aMovieFromApi.title;
            this.imageUri = aMovieFromApi.poster_path;
            this.overview = aMovieFromApi.overview;
        }
    }

}