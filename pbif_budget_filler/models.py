"""Data models for PBIF budget"""

from dataclasses import dataclass
from typing import List, Optional, Dict, Any


@dataclass
class PersonnelItem:
    """A personnel line item"""
    position: str
    fte: float
    year1_salary: float
    year2_salary: float
    benefits_rate: float = 0.25  # 25% default
    
    @property
    def year1_benefits(self) -> float:
        return self.year1_salary * self.benefits_rate
    
    @property
    def year2_benefits(self) -> float:
        return self.year2_salary * self.benefits_rate
    
    @property
    def year1_total(self) -> float:
        return self.year1_salary + self.year1_benefits
    
    @property
    def year2_total(self) -> float:
        return self.year2_salary + self.year2_benefits


@dataclass
class OtherDirectItem:
    """Other direct cost item"""
    description: str
    year1_amount: float
    year2_amount: float


@dataclass
class BudgetData:
    """Complete budget data structure"""
    # Header info
    project_name: str = "PolicyEngine Policy Library"
    agency: str = "Public Benefit Innovation Fund (PBIF)"
    due_date: str = "August 16, 2025"
    preparer: str = "Max Ghenis / PolicyEngine"
    
    # Budget items
    personnel: List[PersonnelItem] = None
    other_direct: List[OtherDirectItem] = None
    
    # Travel and supplies (optional)
    travel_year1: float = 2000
    travel_year2: float = 3000
    supplies_year1: float = 3000
    supplies_year2: float = 3000
    
    # Rates
    indirect_rate: float = 0.10  # 10% de minimis
    
    def __post_init__(self):
        if self.personnel is None:
            self.personnel = self.get_default_personnel()
        if self.other_direct is None:
            self.other_direct = self.get_default_other_direct()
    
    @staticmethod
    def get_default_personnel() -> List[PersonnelItem]:
        """Default PolicyEngine personnel allocation"""
        return [
            PersonnelItem(
                position="Lead Engineer/Director",
                fte=0.75,
                year1_salary=67500,
                year2_salary=69525,
            ),
            PersonnelItem(
                position="ML/AI Engineer",
                fte=0.5,
                year1_salary=40000,
                year2_salary=41200,
            ),
            PersonnelItem(
                position="Policy Coordinator",
                fte=0.25,
                year1_salary=17500,
                year2_salary=18025,
            ),
        ]
    
    @staticmethod
    def get_default_other_direct() -> List[OtherDirectItem]:
        """Default other direct costs"""
        return [
            OtherDirectItem("Partner Microgrants", 60000, 40000),
            OtherDirectItem("Cloud Infrastructure", 10000, 14515),
        ]
    
    @property
    def year1_personnel_salaries(self) -> float:
        return sum(p.year1_salary for p in self.personnel)
    
    @property
    def year2_personnel_salaries(self) -> float:
        return sum(p.year2_salary for p in self.personnel)
    
    @property
    def year1_personnel_benefits(self) -> float:
        return sum(p.year1_benefits for p in self.personnel)
    
    @property
    def year2_personnel_benefits(self) -> float:
        return sum(p.year2_benefits for p in self.personnel)
    
    @property
    def year1_personnel_total(self) -> float:
        return self.year1_personnel_salaries + self.year1_personnel_benefits
    
    @property
    def year2_personnel_total(self) -> float:
        return self.year2_personnel_salaries + self.year2_personnel_benefits
    
    @property
    def year1_other_direct_total(self) -> float:
        return sum(od.year1_amount for od in self.other_direct)
    
    @property
    def year2_other_direct_total(self) -> float:
        return sum(od.year2_amount for od in self.other_direct)
    
    @property
    def year1_direct_total(self) -> float:
        return (
            self.year1_personnel_total +
            self.year1_other_direct_total +
            self.travel_year1 +
            self.supplies_year1
        )
    
    @property
    def year2_direct_total(self) -> float:
        return (
            self.year2_personnel_total +
            self.year2_other_direct_total +
            self.travel_year2 +
            self.supplies_year2
        )
    
    @property
    def year1_indirect(self) -> float:
        return self.year1_direct_total * self.indirect_rate
    
    @property
    def year2_indirect(self) -> float:
        return self.year2_direct_total * self.indirect_rate
    
    @property
    def year1_total(self) -> float:
        return self.year1_direct_total + self.year1_indirect
    
    @property
    def year2_total(self) -> float:
        return self.year2_direct_total + self.year2_indirect
    
    @property
    def grand_total(self) -> float:
        return self.year1_total + self.year2_total
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for easy access"""
        return {
            "project_name": self.project_name,
            "agency": self.agency,
            "due_date": self.due_date,
            "preparer": self.preparer,
            "personnel": self.personnel,
            "other_direct": self.other_direct,
            "travel_year1": self.travel_year1,
            "travel_year2": self.travel_year2,
            "supplies_year1": self.supplies_year1,
            "supplies_year2": self.supplies_year2,
            "indirect_rate": self.indirect_rate,
            "year1_total": self.year1_total,
            "year2_total": self.year2_total,
            "grand_total": self.grand_total,
        }