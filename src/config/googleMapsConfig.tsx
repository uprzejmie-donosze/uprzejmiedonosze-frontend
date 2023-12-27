import React from "react";

const googleMapsConfig = {
  url: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`,
  options: {
    strictBounds: true,
  },
};

export function GoogleMapsScript() {
  return <script src={googleMapsConfig.url} />;
}
