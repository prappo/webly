package api

type Site struct {
	Name    string      `json:"name"`
	Domain  string      `json:"domain"`
	Details SiteDetails `json:"details"`
}

type SiteDetails struct {
	Status string `json:"status"`
}

func GetSites() ([]Site, error) {
	sites := []Site{
		{
			Name:   "Site 1",
			Domain: "site1",
			Details: SiteDetails{
				Status: "Running",
			},
		},

		{
			Name:   "Site 2",
			Domain: "site2",
			Details: SiteDetails{
				Status: "Running",
			},
		},
	}

	return sites, nil

}
