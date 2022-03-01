
import styles from './LocationMap.module.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const LocationMap = ({ location, address, contact, mapMarker, order="text" }) => {
  const hrefContact = contact.phone.replace(/[&/\\#,+()$~%.'":*?<>{}\s-]/g, '');

  return (
    <div className={`${styles["location-map"]} ${order === "text" ? "" : styles["image-first"] }`}>
      <MapContainer className={styles.map} zoom={mapMarker.zoom} center={[mapMarker.lat, mapMarker.long]}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[mapMarker.lat, mapMarker.long]}>
          <Popup><p className="bold">{address.name}</p></Popup>
        </Marker>
      </MapContainer>
      <div className={styles.info}>
        <h2 className="section-heading">{location}</h2>
        <div className={styles.address}>
          <p className="bold">{address.name}</p>
          <p>{address.line1}</p>
          <p>{address.line2}</p>
        </div>
        <div className={styles.contact}>
          <p className="bold">Contact</p>
          <p>P: <a href={`tel:${hrefContact}`}>{contact.phone}</a></p>
          <p>M: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
      </div>
    </div>
  )
}

export default LocationMap;