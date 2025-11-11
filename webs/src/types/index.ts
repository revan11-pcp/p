
export interface TrackingResponse {
  status: boolean;
  list: TrackingItem[];
}

export interface TrackingItem {
  header: Header;
  detail: DetailItem[];
}

export interface Header {
  ServiceName: string; 
  ShipperAddress: string;
  ShipperName: string;
  ReceiverAddress: string;
  ReceiverName: string;
  TrackingNo: string; 
}

export interface DetailItem {
  AwbNo: string;
  TrackingDate: string;
  Location: string;
  OfficeName: string;
  ReceiverDate: string;
  ReceiverTime: string;
  ReceiverName: string;
  ReceiverStatus: string;
  RelatioanName: string | null;
  StatusId: number;
  SubStatusId: number | null;
  StatusName: string;
  Delivery_type?: string;
  CourierName: string;
}
