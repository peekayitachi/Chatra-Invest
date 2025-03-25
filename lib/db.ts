
import { supabase } from "./supabaseClient";

type User = {
  email: string;
  phone_no: number;
  address: string;
  city:string;
  state: string;
  country:string;
  zipcode: number;
  university:string;
  degree: string;
  field: string;
  grad_year:number;
  company:string;
  position:string;
  start_date: Date;
  end_date:Date;
  job_desc: string;
  links:string;
  skills:string;

};
type campaigns ={
  email:string;
  title:string;
  description:string;
  total_fund:number;
  funding_type: "donation"| "lend"| "lend+";
  campaign_id:number;
};
type donations={
  email:string;
  transaction_id:number;
  date:Date;
  campaign_id:number;
  amount:number;
  status:string;
};
// Fetch all rows from a table
export const getAllItems = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }
  return data;
};

// Get a single item by ID
export const getItemById = async (tableName: string, id: string|number) => {
  const { data, error } = await supabase.from(tableName).select("*").eq("id", id).single();

  if (error) {
    console.error(`Error fetching item ${id} from ${tableName}:`, error);
    return null;
  }
  return data;
};

// Insert a new row
export const insertItem = async (tableName: string, item: User|campaigns|donations) => {
  const { data, error } = await supabase.from(tableName).insert([item]);

  if (error) {
    console.error(`Error inserting into ${tableName}:`, error);
    return null;
  }
  return data;
};

// Update a row by ID
export const updateItem = async (tableName: string, id: number, updates: User|campaigns|donations) => {
  const { data, error } = await supabase.from(tableName).update(updates).eq("id", id);

  if (error) {
    console.error(`Error updating ${id} in ${tableName}:`, error);
    return null;
  }
  return data;
};

// Delete a row by ID
export const deleteItem = async (tableName: string, id: number) => {
  const { error } = await supabase.from(tableName).delete().eq("id", id);

  if (error) {
    console.error(`Error deleting ${id} from ${tableName}:`, error);
    return false;
  }
  return true;
};
export const getTotalDonations = async (campaignName: string) => {
  const { data, error } = await supabase
    .from("Campaigns")
    .select("sum(amount)")
    .eq("campaign_name", campaignName)
    .single();

  if (error) {
    console.error("Error fetching total donations:", error);
    return null;
  }
  return data?.sum;
};

export const getAllCampaigns = async () => {
  const { data, error } = await supabase.from("Campaigns").select("*");

  if (error) {
    console.error("Error fetching campaigns:", error);
    return null;
  }
  return data; // Returns an array of campaign objects
};
export const getTotalFundsRaised = async () => {
  const { data, error } = await supabase
    .from("Campaigns")
    .select("total_fund");

  if (error) {
    console.error("Error fetching total funds:", error);
    return null;
  }

  // Calculate the sum of all total_fund values
  const totalFundsRaised = data.reduce((sum, campaign) => sum + campaign.total_fund, 0);

  return totalFundsRaised; // Returns the total funds raised
};
export const getTotalDonationsForUserCampaigns = async (email: string) => {
  // Step 1: Get all campaign IDs created by the user
  const { data: campaigns, error: campaignsError } = await supabase
    .from("Campaigns")
    .select("campaign_id")
    .eq("email_id", email);

  if (campaignsError) {
    console.error("Error fetching campaigns:", campaignsError);
    return null;
  }

  // Extract campaign IDs
  const campaignIds = campaigns.map(campaign => campaign.campaign_id);
  
  if (campaignIds.length === 0) {
    return 0; // No campaigns found for the user
  }

  // Step 2: Get all donations related to those campaign IDs
  const { data: donations, error: donationsError } = await supabase
    .from("Donations")
    .select("amount")
    .in("campaign_id", campaignIds);

  if (donationsError) {
    console.error("Error fetching donations:", donationsError);
    return null;
  }

  // Step 3: Sum up all donation amounts
  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return totalDonations; // Returns total donations for all campaigns created by the user
};
export const getActiveCampaignsForUser = async (email:string) => {
  const { data, error } = await supabase
    .from("Campaigns")
    .select("*")
    .eq("email_id", email)
    .neq("funding_type", "closed"); // Modify based on how active campaigns are determined

  if (error) {
    console.error("Error fetching active campaigns:", error);
    return null;
  }

  return data; // Returns an array of active campaign objects
};

export const getTotalSupportersForUser = async (email: string) => {
  // Step 1: Get all campaign IDs created by the user
  const { data: campaigns, error: campaignError } = await supabase
    .from("Campaigns")
    .select("campaign_id")
    .eq("email_id", email);

  if (campaignError) {
    console.error("Error fetching campaigns:", campaignError);
    return null;
  }

  // Extract campaign IDs
  const campaignIds = campaigns.map((c) => c.campaign_id);

  if (campaignIds.length === 0) {
    return 0; // No campaigns, so no supporters
  }

  // Step 2: Get all donor email IDs for those campaigns
  const { data: donors, error: donationError } = await supabase
    .from("Donations")
    .select("email_id")
    .in("campaign_id", campaignIds);

  if (donationError) {
    console.error("Error fetching donors:", donationError);
    return null;
  }

  // Step 3: Get unique donors by using a Set
  const uniqueSupporters = new Set(donors.map((d) => d.email_id));

  return uniqueSupporters.size; // Returns total unique supporters
};

export const getRecentDonationsForUser = async (email: string) => {
  const { data, error } = await supabase
    .from("Donations")
    .select("*")
    .eq("email_id", email) // Filter by user email
    .order("date", { ascending: false }) // Sort by most recent first
    .limit(10); // Fetch last 10 donations (adjust as needed)

  if (error) {
    console.error("Error fetching recent donations:", error);
    return null;
  }

  return data; // Returns an array of recent donation objects
};
