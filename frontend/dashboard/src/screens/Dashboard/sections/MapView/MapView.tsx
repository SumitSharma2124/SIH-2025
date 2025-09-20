import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { apiClient } from "../../../../lib/api";

export const MapView = (): JSX.Element => {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data: any = await apiClient.getReports();
        if (Array.isArray(data)) {
          setReports(data);
        } else if (data && Array.isArray(data.reports)) {
          setReports(data.reports);
        } else {
          setReports([]);
        }
      } catch (error) {
        setError("Failed to fetch reports");
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  // Default center: India
  const defaultCenter = [22.9734, 78.6569];

  return (
    <div className="w-full bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-4 sm:p-6 md:p-8">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Interactive Map View</h3>
      {loading ? (
        <div className="text-center text-lg">Loading map...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-lg overflow-hidden">
          <MapContainer center={defaultCenter} zoom={5} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {reports.map((report, idx) => {
              const coords = report.location?.coordinates;
              if (!coords || coords.length !== 2) return null;
              return (
                <Marker key={report._id || idx} position={[coords[1], coords[0]]}>
                  <Popup>
                    <div>
                      <div className="font-semibold">{report.title}</div>
                      <div>Lat: {coords[1]}, Lng: {coords[0]}</div>
                      <div>Priority: {report.priority || "-"}</div>
                      <div>Status: {report.status || "-"}</div>
                      <div>Department: {report.department || "-"}</div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      )}
    </div>
  );
};