using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Web.Controllers;

[Area("Layouts")]
public class SplitPanesController : Controller
{
	public IActionResult ShowSamples()
	{
		return View("SplitPanesSamples");
	}
}