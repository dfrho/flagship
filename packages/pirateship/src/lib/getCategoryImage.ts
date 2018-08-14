
export interface CategoryImage {
  uri: string | undefined;
}

const baseUri = {
  demandWare: 'https://demo-ocapi.demandware.net/on/demandware.static/-/Sites-',
  cloudinary: 'https://res.cloudinary.com/dm89xfnl4/image/upload/'
};

const settings = {
  demandWare: 'storefront-catalog-en/default/',
  cloudinary: 'c_fill,dpr_4.0,h_130,w_130/'
};

export function getCategoryImage(categoryID: string): CategoryImage {
  let returnImage = { uri: '' };
  switch (categoryID) {
    case 'mens':
      returnImage = {
        // tslint:disable-next-line:max-line-length ter-max-len
        uri: `${baseUri.demandWare}${settings.demandWare}dwd488d6b4/images/slot/landing/cat-landing-slotbottom-mens-dressshirts.jpg`
      };
      break;
    case 'electronics':

      returnImage = {
        // tslint:disable-next-line:max-line-length ter-max-len
        uri: `${baseUri.demandWare}${settings.demandWare}dwa0034e19/images/slot/landing/cat-landing-slotbottom-electronics.jpg`
      };
      break;
    case 'top-seller':

      returnImage = {
        // tslint:disable-next-line:max-line-length
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533781528/cup-2315554_640_pmsq6n.jpg`
      };
      break;
    case 'gift-certificates':
      returnImage = {
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533781356/map-2527432_640_xfa3ly.jpg`
      };
      break;
    case 'newarrivals':
      returnImage = {
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533785211/sparkler-677774_640_prjg3l.jpg`
      };
      break;
    // shopify Accessories
    case 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzU5NjQzODIyMTk4':

      returnImage = {
        // tslint:disable-next-line:max-line-length ter-max-len
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533937844/ethan-robertson-134952-unsplash_w0icr3.jpg`
      };
      break;

    // shopify Electronics
    case 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc1NTk4NzI1MjM4':

      returnImage = {
        // tslint:disable-next-line:max-line-length ter-max-len
        uri: `${baseUri.demandWare}${settings.demandWare}dwa0034e19/images/slot/landing/cat-landing-slotbottom-electronics.jpg`
      };
      break;

    // shopify Apparel
    case 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc1NjAxNjA4ODIy':
      returnImage = {
        // tslint:disable-next-line:max-line-length ter-max-len
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533937702/keagan-henman-625468-unsplash_rabfaz.jpg`
      };
      break;

    // shopify Featured Products
    case 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc4ODEwMDU0Nzc0':

      returnImage = {
        // tslint:disable-next-line:max-line-length
        uri: `${baseUri.cloudinary}${settings.cloudinary}v1533785211/sparkler-677774_640_prjg3l.jpg`
      };
      break;
    default:
      break;
  }
  return returnImage;
}
