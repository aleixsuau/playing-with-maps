import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  related = [
    {
      "name": "default",
      "related_objects": [
        {
          "id": 801,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "drink",
          "subtype": "Drink",
          "type": "Nightlife",
          "type_slug": "nightlife",
          "image": "places/801/paris_int_barsandcafes_mathis_03.jpg",
          "title": "Mathis",
          "description": "<p>The closing of Mathis, one of the most deliciously louche cocktail bars in the nightlife-challenged Golden Triangle, occasioned heavy hearts: where else could one reliably spot Emmanuelle Seigner one banquette over from an Arnault scion, and still have room to breathe? Recently revived under the Experimental Cocktail Club group, happily almost nothing has changed.</p>\r\n",
          "lng": 2.311267,
          "lat": 48.870064,
          "address": "3 Rue de Ponthieu",
          "zipcode": "75008",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 440,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "museum",
          "subtype": "Museum",
          "type": "Arts & Culture",
          "type_slug": "culture",
          "image": "places/440/paris_int_place_museelartmoderne_00.jpg",
          "title": "Musée de l’Art Moderne",
          "description": "<p>The Palais de Tokyo’s older sister houses a broad collection of 20th-century (mostly) European art, with major works by an impressive who’s who: de Chirico, Dufy, Vlaminck, Picasso, Messager, Keita, Picabia, Gysin, and on and on.</p>\r\n",
          "lng": 2.297858,
          "lat": 48.864324,
          "address": "11 Avenue du Président Wilson",
          "zipcode": "75116",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 725,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "landmark",
          "subtype": "Landmark",
          "type": "Landmarks",
          "type_slug": "landmarks",
          "image": "places725paris_istock_landmarks_eiffeltower_00.jpg",
          "title": "Eiffel Tower",
          "description": "<p>Perhaps you&rsquo;ve heard of it. With lines that can stretch into hours, Gustave Eiffel&rsquo;s 1889 steel icon, originally commissioned for the World&rsquo;s Fair, may be best observed from the esplanade at Trocad&eacute;ro. One reason to consider braving the wait: Eiffel&rsquo;s private apartments have just opened to the public.</p>\r\n",
          "lng": 2.294477,
          "lat": 48.858366,
          "address": "Champ de Mars, 5 Avenue Anatole France",
          "zipcode": "75007",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 439,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "museum",
          "subtype": "Museum",
          "type": "Arts & Culture",
          "type_slug": "culture",
          "image": "places439paris_pickup-florent-michel_artsandculture_palaisdetokyo_12.jpg",
          "title": "Palais de Tokyo",
          "description": "<p>This sharp museum dedicated to contemporary art opened in the twin building to the Mus&eacute;e de l&rsquo;Art Moderne in 2002&nbsp;and it&rsquo;s been an important springboard for young talents ever since. Past exhibitions include photographer Hiroshi Sugimoto, filmmaker and performance artist Philippe Parreno, and sculptor Henrique Oliveira.</p>\r\n",
          "lng": 2.296497,
          "lat": 48.864238,
          "address": "13 Avenue du Président Wilson",
          "zipcode": "75116",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 792,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "coffee",
          "subtype": "Coffee",
          "type": "Bars & Cafes",
          "type_slug": "bars",
          "image": "places/792/paris_int_barsandcafes_carette_00.jpg",
          "title": "Carette",
          "description": "<p>As with any touristy corner, the restaurant situation in Trocad&eacute;ro is not ideal. Prissy patisserie Carette is a welcome exception. Salads and sandwiches are perfectly fine, but the devastating soft scrambled eggs&mdash;customizable with <em>fines herbes</em>, mushrooms, ham or cheese, and a flaky breadstick&mdash;are why we come back.</p>\r\n",
          "lng": 2.287201,
          "lat": 48.863713,
          "address": "4 Place du Trocadéro et du 11 Novembre",
          "zipcode": "75016",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 442,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "museum",
          "subtype": "Museum",
          "type": "Arts & Culture",
          "type_slug": "culture",
          "image": "places/442/paris_int_place_museegalliera_00.jpg",
          "title": "Musée Galliera",
          "description": "<p>The world capital of fashion’s only freestanding couture museum, the gorgeous Musée Galliera is surprisingly <em>petit</em> given its extensive archives. The complexity of clothing conservation means there are no permanent exhibitions, but with so much Schiaparelli, Fath, Givenchy, Balenciaga, and Saint Laurent to choose from, something stunning will be on view.</p>\r\n",
          "lng": 2.296699,
          "lat": 48.86565,
          "address": "10 Avenue Pierre 1er de Serbie",
          "zipcode": "75016",
          "content_type": "place",
          "alias": ""
        },
        {
          "id": 443,
          "city": "Paris",
          "city_id": 33,
          "subtype_slug": "museum",
          "subtype": "Museum",
          "type": "Arts & Culture",
          "type_slug": "culture",
          "image": "places/443/paris_int_artsandculture_museeguimet_04.jpg",
          "title": "Musée Guimet",
          "description": "<p>Paris might not be the most intuitive home to one of the largest collections of Asian art outside of Asia, but this graceful building houses world-class Khmer statues, one of only ten extant massive glazed <em>luohans</em> from Yixian, and a Bodhisattva for every possible mood. A serious, lovely affair.</p>\r\n",
          "lng": 2.293862,
          "lat": 48.86503,
          "address": "6 Place d'Iéna",
          "zipcode": "75116",
          "content_type": "place",
          "alias": ""
        }
      ]
    }
  ];

  constructor() {}
}
