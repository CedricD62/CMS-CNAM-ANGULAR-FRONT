import {Produit} from "../interfaces/produit";

export const
  produits: Produit[] = [
    {
      Id : "12345",
      Name : "Chaussure",
      Price : 54.99,
      Tva : 20,
      DateAjout: new Date(),
      Description: {
        Id : "321321",
        Information: "blablabla",
        IsArchived: false,
        DateDescription: new Date(),
        Name: "tatata"
      },
      Stock: {
        Id: "1321321321",
        DateModification : new Date(),
        DateReapprovisionnement: new Date(),
        Quantite: 5
      },
      Images: [
        {
          Id:"1321321321",
          Name:"image",
          Information:"aucune",
          Url:"",
          DateAjout:new Date(),
          EstActif: true
        }
      ],
      Tags: [{
        Id:"sdfsdf",
        Name:"aucun",
        DateAjout: new Date(),
        EstActif: true
      }],
      IsArchived: false,
      Variants: [
        {
          Id:"1321321321",
          Name:"aucun",
          Descriptif:"bof",
          DateAjout: new Date(),
          EstActif: true
        }
      ]

    },
    {
      Id : "12346",
      Name : "PC",
      Price : 1554.99,
      Tva : 20,
      DateAjout: new Date(),
      Description: {
        Id : "321321",
        Information: "blablabla",
        IsArchived: false,
        DateDescription: new Date(),
        Name: "tatata"
      },
      Stock: {
        Id: "1321321321",
        DateModification : new Date(),
        DateReapprovisionnement: new Date(),
        Quantite: 5
      },
      Images: [
        {
          Id:"1321321321",
          Name:"image",
          Information:"aucune",
          Url:"",
          DateAjout:new Date(),
          EstActif: true
        }
      ],
      Tags: [{
        Id:"sdfsdf",
        Name:"aucun",
        DateAjout: new Date(),
        EstActif: true
      }],
      IsArchived: false,
      Variants: [
        {
          Id:"1321321321",
          Name:"aucun",
          Descriptif:"bof",
          DateAjout: new Date(),
          EstActif: true
        }
      ]

    },
    {
      Id : "12347",
      Name : "Vodka",
      Price : 14.99,
      Tva : 5.5,
      DateAjout: new Date(),
      Description: {
        Id : "321321",
        Information: "blablabla",
        IsArchived: false,
        DateDescription: new Date(),
        Name: "tatata"
      },
      Stock: {
        Id: "1321321321",
        DateModification : new Date(),
        DateReapprovisionnement: new Date(),
        Quantite: 5
      },
      Images: [
        {
          Id:"1321321321",
          Name:"image",
          Information:"aucune",
          Url:"",
          DateAjout:new Date(),
          EstActif: true
        }
      ],
      Tags: [{
        Id:"sdfsdf",
        Name:"aucun",
        DateAjout: new Date(),
        EstActif: true
      }],
      IsArchived: false,
      Variants: [
        {
          Id:"1321321321",
          Name:"aucun",
          Descriptif:"bof",
          DateAjout: new Date(),
          EstActif: true
        }
      ]

    }
  ];
