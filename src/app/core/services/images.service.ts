import {Injectable} from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { map, take } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private cloudinaryDom: string;
  private cloudinary: string;
  private cloudinaryQ: string;
  private sizes: Object;
  private pageSizes: Object;

  constructor(
	private _mediaObserver: MediaObserver,
  ){}

	/* sizes param works with the https://github.com/angular/flex-layout/wiki/Responsive-API breakpoints:
        mqAlias | mediaQuery
		xs === 'screen and (max-width: 599px)'
		sm === 'screen and (min-width: 600px) and (max-width: 959px)'
		md === 'screen and (min-width: 960px) and (max-width: 1279px)'
		lg === 'screen and (min-width: 1280px) and (max-width: 1919px)'
		xl === 'screen and (min-width: 1920px) and (max-width: 5000px)'

		lt-sm === 'screen and (max-width: 599px)'
		lt-md === 'screen and (max-width: 959px)'
		lt-lg === 'screen and (max-width: 1279px)'
		lt-xl === 'screen and (max-width: 1919px)'

		gt-xs === 'screen and (min-width: 600px)'
		gt-sm === 'screen and (min-width: 960px)'
		gt-md === 'screen and (min-width: 1280px)'
		gt-lg === 'screen and (min-width: 1920px)'
	*/
  getImageUrl$(url: string, height: number, width: number, sizes?: IImageSizes): Observable<string>{
	if (!url) { return of(null); }

	if (url.includes('https://res.cloudinary.com/thebellhop/image/upload/') || url.includes('http://res.cloudinary.com/thebellhop/image/upload/')) {
		url = url.split('upload/')[1];
	}

	if (sizes) {
		// NOTE: Can't be used for [style.backgroundImage] binding (too much detection change cycles)
		return this._mediaObserver.media$.pipe(
			map(media => {
				height = sizes[media.mqAlias] && sizes[media.mqAlias].height || height;
				width = sizes[media.mqAlias] && sizes[media.mqAlias].width || width;
				return `https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_${height},w_${width}/${url}`;
			}),
			take(1),
		)
	} else {
		return of(`https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_${height},w_${width}/${url}`);
	}
  }
}
