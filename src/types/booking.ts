export interface PublicService {
  id: number;
  name: string;
  description: string | null;
  basePrice: number;
  estimatedMins: number | null;
  category: string;
  isActive: boolean;
  serviceCategory: { name: string; sortOrder: number } | null;
}

export interface BookingFormData {
  // Step 1: Services
  serviceIds: number[];

  // Step 2: Vehicle
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleColor: string;
  vehiclePlate: string;

  // Step 3: Contact
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  preferredAttendantId: number;

  // Step 4: Schedule
  scheduledDate: string;
  scheduledTime: string;

  // Step 5: Review
  notes: string;
}

export interface BookingResponse {
  success: boolean;
  data: {
    reference: string;
    scheduledDate: string;
    scheduledTime: string;
    services: { name: string; price: number }[];
    totalEstimate: number;
    message: string;
  };
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    reference?: string;
  };
}

export interface PublicAttendant {
  id: number;
  firstName: string;
  lastName: string;
}