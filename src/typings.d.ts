interface IImageSizes {
  [key: string]: {
    height: number,
    width: number
  }
}

interface IUser {
  id?: number;
  username?: string;
  password?: string;
  confirmPassword?: string;
  title?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active?: boolean;
  affiliation_code?: string;
  phone?: string;
  country?: string;
  city?: string;
  preferences?: string;
  avatar?: string;
  referred?: string;
  tripsayear?: string;
  impressionhotel1?: string;
  impressionhotel2?: string;
  impressionhotel3?: string;
  impressiondest1?: string;
  impressiondest2?: string;
  impressiondest3?: string;
  custompreferences?: string;
  socialprofile?: string;
}

interface ITag {
  title: string;
  value: string;
  icon: string;
}
interface ILocation {
  title: string;
  lng: string;
  lat: string;
  id?: number;
  city_id?: number;
  city?: string;
  subtype_slug?: string;
  subtype?: string;
  type?: string;
  type_slug?: string;
  image?: string;
  description?: string;
  address?: string;
  zipcode?: string;
  content_type?: string;
  alias?: string;
}

interface IRelated {
  name: string;
  related_objects: ILocation[];
}

interface IMapMarker {
  lng: string;
  lat: string;
  title: string;
}

interface IType {
  title: string;
  key: string;
  markers: google.maps.Marker[];
  locations: ILocation[];
  infoWindows: any[];
}
